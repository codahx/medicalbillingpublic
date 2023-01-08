from flask import Flask, request
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os
import easyocr
import pandas as pd
from utils import return_text

reader = easyocr.Reader(["en"])
codes = pd.read_excel("data/medicalcodes.xlsx")

app = Flask(__name__)

# This is necessary because QUploader uses an AJAX request
# to send the file
cors = CORS()
cors.init_app(app, resource={r"/api/*": {"origins": "*"}})


@app.route("/upload", methods=["POST"])
def upload():
    for fname in request.files:
        f = request.files.get(fname)
        print(fname)
        f.save("./uploads/%s" % secure_filename(fname))
        image_name = "./uploads/%s" % secure_filename(fname)
        result2 = reader.readtext(image_name, detail=0)
        cpt_codes = return_text(result2, codes)

        print(cpt_codes)

    return "Okay!"


if __name__ == "__main__":
    if not os.path.exists("./uploads"):
        os.mkdir("./uploads")
    app.run(debug=True)
