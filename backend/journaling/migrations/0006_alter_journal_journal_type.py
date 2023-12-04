# Generated by Django 4.2.7 on 2023-11-28 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('journaling', '0005_rename_date_completed_journal_date_started_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='journal',
            name='journal_type',
            field=models.CharField(choices=[('0', 'Empty Page'), ('1', 'Random Prompt')], max_length=2, null=True),
        ),
    ]
