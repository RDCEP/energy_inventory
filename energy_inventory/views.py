# -*- coding: utf-8 -*-
from flask import Blueprint, render_template
from random import random


mod = Blueprint('energy_inventory', __name__,
                static_folder='static',
                template_folder='templates')


@mod.route('/')
def index():
    r = random()
    return render_template(
        'index.html',
        variable_from_python=r,
    )
