from jinja2 import Environment, FileSystemLoader, select_autoescape
import json


def main():

    with open('assets/db/jpaper.json', 'r') as f:
        jpapers = json.load(f)
    with open('assets/db/cpaper.json', 'r') as f:
        cpapers = json.load(f)
    with open('assets/db/patent.json', 'r') as f:
        patents = json.load(f)
    with open('assets/db/award.json', 'r') as f:
        awards = json.load(f)
    with open('assets/db/job.json', 'r') as f:
        jobs = json.load(f)
    with open('assets/db/education.json', 'r') as f:
        educations = json.load(f)

    env = Environment(
        loader=FileSystemLoader('assets/templates'),
        autoescape=select_autoescape(['html', 'xml']))

    #index.html
    template = env.get_template('template_index.html')
    rendered = template.render(
        jpapers=jpapers,
        cpapers=cpapers,
        awards=awards,
        educations=educations,
        jobs=jobs,
        patents=patents,
        page='index')

    with open('index.html', 'w') as f:
        f.write(rendered)


if __name__ == '__main__':
    main()
