import json
import re
from pathlib import Path

import cv2
import pytesseract


ROOT = Path(__file__).resolve().parents[1]

INPUT_IMAGE = (
    ROOT
    / "public"
    / "timetables"
    / "stem"
    / "year2"
    / "year2-cse.jpg"
)

OUTPUT_FILE = (
    ROOT
    / "generated"
    / "timetables.json"
)


DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
]

TIME_SLOTS = [
    "09:00-10:00",
    "10:00-11:00",
    "11:10-12:10",
    "13:10-14:00",
    "14:00-15:00",
    "15:00-16:00",
]


def clean_text(text):
    text = text.replace("\n", " ")
    text = re.sub(r"\s+", " ", text)
    text = text.strip()

    corrections = {
        "b. pinta muralidharan": "Dr. Dinta Muralidharan",
        "b. pinta Muralidharan": "Dr. Dinta Muralidharan",
        "pinta muralidharan": "Dr. Dinta Muralidharan",
        "Dinta Muralidharan": "Dr. Dinta Muralidharan",
    }

    for wrong, correct in corrections.items():
        text = text.replace(wrong, correct)

    return text


def ocr_cell(cell):
    if cell.size == 0:
        return ""

    gray = cv2.cvtColor(cell, cv2.COLOR_BGR2GRAY)

    gray = cv2.resize(
        gray,
        None,
        fx=3,
        fy=3,
        interpolation=cv2.INTER_CUBIC,
    )

    gray = cv2.GaussianBlur(gray, (3, 3), 0)

    _, threshold = cv2.threshold(
        gray,
        180,
        255,
        cv2.THRESH_BINARY,
    )

    text = pytesseract.image_to_string(
        threshold,
        config="--psm 6",
    )

    return clean_text(text)


def extract_timetable(image):
    height, width = image.shape[:2]

    # Timetable occupies the upper portion of the image.
    # The course-list table below is deliberately excluded.
    timetable = image[
        int(height * 0.05):int(height * 0.45),
        int(width * 0.10):int(width * 0.90),
    ]

    h, w = timetable.shape[:2]

    # Approximate column boundaries for this timetable format.
    # First column = day.
    x_boundaries = [
        0,
        int(w * 0.255),
        int(w * 0.345),
        int(w * 0.440),
        int(w * 0.535),
        int(w * 0.630),
        int(w * 0.735),
        int(w * 0.825),
        w,
    ]

    # Monday-Friday row boundaries.
    y_boundaries = [
        int(h * 0.32),
        int(h * 0.45),
        int(h * 0.58),
        int(h * 0.70),
        int(h * 0.82),
        int(h * 0.94),
    ]

    timetable_data = {}

    for day_index, day in enumerate(DAYS):
        timetable_data[day] = []

        y1 = y_boundaries[day_index]
        y2 = y_boundaries[day_index + 1]

        # The timetable has 8 actual time columns.
        for slot_index in range(7):
            x1 = x_boundaries[slot_index + 1]
            x2 = x_boundaries[slot_index + 2]

            cell = timetable[y1:y2, x1:x2]

            text = ocr_cell(cell)

            if text:
                timetable_data[day].append(
                    {
                        "time": TIME_SLOTS[
                            min(slot_index, len(TIME_SLOTS) - 1)
                        ],
                        "subject": text,
                    }
                )

    return timetable_data


def main():
    if not INPUT_IMAGE.exists():
        raise FileNotFoundError(
            f"Timetable image not found: {INPUT_IMAGE}"
        )

    image = cv2.imread(str(INPUT_IMAGE))

    if image is None:
        raise RuntimeError(
            "Could not read timetable image."
        )

    timetable = extract_timetable(image)

    result = {
        "school": "stem",
        "year": 2,
        "course": "CSE",
        "source": str(
            INPUT_IMAGE.relative_to(ROOT)
        ),
        "timetable": timetable,
    }

    OUTPUT_FILE.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8",
    ) as file:
        json.dump(
            result,
            file,
            indent=2,
            ensure_ascii=False,
        )

    print("Table-aware timetable OCR completed.")
    print("----- EXTRACTED TIMETABLE -----")
    print(
        json.dumps(
            timetable,
            indent=2,
            ensure_ascii=False,
        )
    )
    print("----- END TIMETABLE -----")
    print(f"Output: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
