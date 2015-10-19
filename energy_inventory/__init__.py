#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask

app = Flask(__name__)
app.config.from_object('config')

from energy_inventory.views import mod as main_module
app.register_blueprint(main_module)

if __name__ == '__main__':
    app.run()