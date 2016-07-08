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


@mod.route('/coal_mines')
def coal_mines():
    return render_template('coal_mines.html')


@mod.route('/oil_gas_extraction')
def oil_gas_extraction():
    return render_template('oil_gas_extraction.html')


@mod.route('/oil_gas_storage')
def oil_gas_storage():
    return render_template('oil_gas_storage.html')


@mod.route('/power_plants')
def power_plants():
    return render_template('power_plants.html')


@mod.route('/petroleum_crude_pipelines')
def petroleum_crude_pipelines():
    return render_template('petroleum_crude_pipelines.html')


@mod.route('/natural_gas_pipelines')
def natural_gas_pipelines():
    return render_template('natural_gas_pipelines.html')


