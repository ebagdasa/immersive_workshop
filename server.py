from flask import Flask, render_template, send_from_directory
app = Flask(__name__)
import os

@app.route('/')
def hello_world():
    return send_from_directory('templates/', 'index.html')

@app.route('/bower_components/<path:path>')
def files(path):
    return send_from_directory('templates/bower_components', path)

@app.route('/src/<path:path>')
def files_src(path):
    return send_from_directory('templates/src', path)