import dash_mantine_components as dmc
from dash import Dash, _dash_renderer, html
_dash_renderer._set_react_version("18.2.0")

app = Dash(external_stylesheets=dmc.styles.ALL)

data = [
    {"month": "January", "Smartphones": 1200, "Laptops": 900, "Tablets": 200},
    {"month": "February", "Smartphones": 1900, "Laptops": 1200, "Tablets": 400},
    {"month": "March", "Smartphones": 400, "Laptops": 1000, "Tablets": 200},
    {"month": "April", "Smartphones": 1000, "Laptops": 200, "Tablets": 800},
    {"month": "May", "Smartphones": 800, "Laptops": 1400, "Tablets": 1200},
    {"month": "June", "Smartphones": 750, "Laptops": 600, "Tablets": 1000}
]


barProps_figure = dmc.Paper([
    html.Div("Example of new barProps property.  This figure should have a radius on each bar"),
    dmc.BarChart(
        h=300,
        dataKey="month",
        data=data,
        orientation="vertical",
        yAxisProps={"width": 80},
        barProps= {"radius": 50},
        series=[{"name": "Smartphones", "color": "violet.6"}],
    )
], m=50)

withBarValueLabel_figure = dmc.Paper([
    html.Div("Example of new withBarValueLabel prop - note the label on top of each bar"),
    dmc.BarChart(
            h=300,
            dataKey="month",
            data=data,
            withTooltip=False,
            series=[
                {"name": "Smartphones", "color": "violet.6"},
                {"name": "Laptops", "color": "blue.6"},
                {"name": "Tablets", "color": "teal.6"},
            ],
            withBarValueLabel=True,
            m=50
        )
    ], m=50)

app.layout = dmc.MantineProvider([
    barProps_figure,
    withBarValueLabel_figure
])

if __name__ == "__main__":
    app.run(debug=True)