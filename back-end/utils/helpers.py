import pandas as pd


def return_text(image, df):
    cpt_codes = [x for x in image if len(x) == 5 or len(x) == 6]
    a = []
    for code in cpt_codes:
        if len(df[df["HCPCS"].apply(lambda x: str(code) in x)]) >= 1:
            a.append(code)
    return a
