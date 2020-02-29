# SimpleJS-Chart
A simple and funcional function to generate a HTML bar chart.

## How to use this

Create a div with an id, after this, open a javascript tag an put into something like this:

```
div = document.getElementById('div_id');
data = [2,4.5,6.8,9];
SimpleChart('Title',500,900,'#a84fb3',div,data);
```

Result:

![Result](https://raw.githubusercontent.com/manbomb/SimpleJS-Chart/master/prints.png)

Where 'div' is the object of your chart div, and 'data' is your array (linear) of values.

### Inputs:

- Title: text in the top of chart.
- Height: height of chart in pixels.
- Width: width of chart in pixels too.
- Color: color of fill of bars.
- Div: the div for draw the chart.
- Data: the array of values to draw.

## It remains to be done:

1. ~~Draw negative values.~~
2. ~~Display a resume of the bar below the mouse pointer.~~
3. ~~Change the color of bar below the mouse pointer.~~

## Last updates

- Display negative values.
- Display the value of bar below the mouse pointer in top of chart.
- Change the color of bar below the mouse pointer (to the inverse of original color).
