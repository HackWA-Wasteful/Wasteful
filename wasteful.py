from flask import Flask, render_template


app = Flask(__name__)

@app.route('/index')   
def index():
     return render_template('index.html') 

@app.route('/charts')   
def charts():
     return render_template('charts.html')

@app.route('/tables')   
def tables():
     return render_template('tables.html')

@app.route('/register')   
def register():
     return render_template('register.html')

@app.route('/forgot_password')   
def forgot_password():
     return render_template('forgot_password.html')	 
	 
@app.route('/')   
def login():
     return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)   




