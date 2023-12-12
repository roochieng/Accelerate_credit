from flask import render_template, request, url_for, flash, redirect
from flask import Flask


app = Flask(__name__, '/static')

@app.route("/")
def landing():
    return render_template("layout.html")


if __name__ == "__main__":
    app.run(debug=True)