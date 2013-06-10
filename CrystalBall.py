from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def hello_world():
    with file('templates/index.html', 'r') as f:
        return f.read()

if __name__ == '__main__':
    app.run()
