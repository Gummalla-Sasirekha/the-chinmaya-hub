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


def clean_text(text):
    text = text.replace("\n", " ")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def extract_text(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    gray = cv2.resize(
        gray,
        None,
        fx=2,
        fy=2,
        interpolation=cv2.INTER_CUBIC,
    )

    _, threshold = cv2.threshold(
        gray,
        180,
        255,
        cv2.THRESH_BINARY,
    )

    return pytesseract.image_to_string(
        threshold,
        config="--psm 6",
    )


def main():
    if not INPUT_IMAGE.exists():
        raise FileNotFoundError(
            f"Timetable image not found: {INPUT_IMAGE}"
        )

    image = cv2.imread(str(INPUT_IMAGE))

    if image is None:
        raise RuntimeError("Could not read timetable image.")

    text = extract_text(image)

    result = {
        "course": "CSE",
        "year": 2,
        "source": str(
            INPUT_IMAGE.relative_to(ROOT)
        ),
        "rawText": clean_text(text),
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

    print("Timetable OCR completed.")
    print(f"Output: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
