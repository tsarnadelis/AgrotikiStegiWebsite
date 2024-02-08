#-------------------------------------------------------
#This is the remote server code for the web application.
#For remote access, port forwarding needs to be set up.
#-------------------------------------------------------

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8112, debug=True)
