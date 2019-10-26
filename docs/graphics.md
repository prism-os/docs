---
id: graphics
title: Graphics
---

Apps which register `widget` ability in `manifest.json` can have `draw` method in their class which is called to draw the UI for their widget.  
The `draw` method is given an instance of `Graphics` class that is used to draw the widget UI.

The following methods are available on the `Graphics` object:
1. `line`:  
```C++
void line(String str, int x, int y, int limit = 0, bool bold = false, bool large = false)
```
draws single line text on screen which truncates with ellipsis on reaching end of screen.

2. `paragraph`:  
```C++
bool paragraph(String str, int x, int y, int rows = 0, int cols = 0, int offset = 0, bool bold = false)
```
draws multiple line text on screen with scrolling built in.

3. `button`:  
```C++
void button(String str, int x, int y, bool active = true)
```
draws a button.

4. `topBar`:  
```C++
void topBar(String str)
```
Change the text rendered on the top bar.

5. `backBar`:  
```C++
void backBar(void)
```
Show the top bar with back icon, can be used to indicate navigating back to the user.

6. `markerUp`:  
```C++
void markerUp(void)
```
Show the indicator on the top bar indicating that the current screen reacts to up button press.

7. `markerDown`:  
```C++
void markerDown(void)
```
Show the indicator on the top bar indicating that the current screen reacts to down button press.

8. `markerEnter`:  
```C++
void markerEnter(void)
```
Show the indicator on the top bar indicating that the current screen reacts to select button press.

9. `ellipsis`:  
```C++
String ellipsis(String str, int limit)
```
Helper function that given a string and number of characters, returns a new string that will fit within that many number of characters.  
If the input string is longer that `limit` then it will be truncated and ellipsis added at end, otherwise will return the sting as is if it is within `limit`.

10. `getWidgetAreaWidth`:  
```C++
int getWidgetAreaWidth(void)
```
Get the width of the drawable area provided to the widget.

11. `getWidgetAreaHeight`:  
```C++
int getWidgetAreaHeight(void)
```
Get the height of the drawable area provided to the widget.

Some static constants defined on the `Graphics` class are:  
`NORMAL_FONT_WIDTH`  
`NORMAL_FONT_HEIGHT`  
`LARGE_FONT_WIDTH`  
`LARGE_FONT_HEIGHT`  
