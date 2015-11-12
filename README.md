# Pronto Data Explorer

This is my submission to the [Pronto Data Challenge 2015](http://www.prontocycleshare.com/datachallenge). It's a data exploration tool, which allows the user to interactively filter the data while the shape of the data is shown on several graphs and a heatmap. Play with it [here](thatneat.github.io/pronto-data-challenge/)!

The map is built using the Google Maps API and the live filtering uses the impressive [Crossfilter](https://square.github.io/crossfilter/) in-browser filtering tool by Square.


## Code Style

In my work I am used to architecting sites with the help of fantastic tools such as [React](https://facebook.github.io/react/), [Webpack](https://github.com/webpack/webpack) and [ES2015](https://babeljs.io/docs/learn-es2015/). I approached the data challenge as an experiment in dropping all of those trappings, and throwing all of the code in one big HTML file. As expected, things got a little crazy with this amount of code in one file, but hey, it's a hackathon!

The Data Explorer was developed in roughly four stages:

1. Create a map visualization I liked & download estimated routes
2. Set up the CrossFilter to work with ride data
3. Connect the map visualization to the CrossFilter output so that the map responds to filter changes
4. Polish
5. ???
6. Profit!


## Data Preparation

Much of the data prep (downloading elevations, converting from CSV to JSON) was done using the simple scripts and notebooks in the data directory. This would have been more time-consuming without the help of my ETL swiss-army-knife, [petl](http://petl.readthedocs.org).

The most time-consuming data preparation step was in downloading routes to display on the map. This was particularly time consuming because I chose to use the Google Directions Client API, which has severe rate limits. Code for this is in `download_data.html`.
