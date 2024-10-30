=== Highlighted Code Extractor ===
Contributors: un44444444
Donate link: http://chen-w.com/
Tags: highlight, extract
Requires at least: 2.5.0
Tested up to: 3.0.1
Stable tag: 0.1.1

Extract the highlighted source code. By this, we could do something with the source code.

== Description ==

Extract the highlighted source code. 
By this, we could do something with the source code. 
For example, preview html code in new windows.

A few notes about the sections above:

*   Current version support preview html source code int new windos/tab
*   or copy the source code.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload `code_extractor` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Now plugin is ready to go

== Usage ==

we can use it when write posts.
just add [extract][/extract] to wrap the highlighted source code.

e.g.
[extract id="id1"]<pre class="cpp">int main(){return 0;}</pre>[/extract]
[extract id="id1"][html]<html><head></head><body></body></html>[/html][/extract]

== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the directory of the stable readme.txt, so in this case, `/tags/4.3/screenshot-1.png` (or jpg, jpeg, gif)
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Initial version that only support preview and copy html source code.

= 0.1.1 =
* Add I18N support.

== Upgrade Notice ==

= 0.1.1 =
Upgrade notices describe the reason a user should upgrade.  No more than 300 characters.

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above.  This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation."  Arbitrary sections will be shown below the built-in sections outlined above.

== A brief Markdown Example ==

Ordered list:

1. Some feature
1. Another feature
1. Something else about the plugin

Unordered list:

* something
* something else
* third thing

Here's a link to [WordPress](http://wordpress.org/ "Your favorite software") and one to [Markdown's Syntax Documentation][markdown syntax].
Titles are optional, naturally.

[markdown syntax]: http://daringfireball.net/projects/markdown/syntax
            "Markdown is what the parser uses to process much of the readme file"

Markdown uses email style notation for blockquotes and I've been told:
> Asterisks for *emphasis*. Double it up  for **strong**.

`<?php code(); // goes in backticks ?>`
