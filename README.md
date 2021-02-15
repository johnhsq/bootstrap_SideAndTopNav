# Bootstrap Toggle Sidebar
Bootstrap doesn't provide a sidebar component. This example is using bootstrap ".navbar" and ".nav", "data-toggle" to implement a sidebar component

# How it works
The ".toggled" class is used by Javascript to hide and show the sidebar
```
    #wrapper.toggled {
        padding-left: 220px;
    }
```

The sidebar is composed with:
    <ul>
        <li>brand</li>
        <li>profile</li>
        <li>menu</li>
        <li>footer</li>
    </ul>

# How it looks like
![Show sidebar](img/sidebar.show.png?raw=true "Show sidebar")
![Hide sidebar](img/sidebar.hide.png?raw=true "Hide sidebar")