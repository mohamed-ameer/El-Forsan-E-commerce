# Generated by Django 3.2 on 2023-02-02 22:05

import base.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_auto_20230201_0636'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=base.models.user_directory_path),
        ),
    ]
