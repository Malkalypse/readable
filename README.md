# readable


## What is this?
**readable()** is a utility function to take any type of data as a parameter, and return it in an easily-readable format. I am primarily envisioning this as a debugging tool, though there are definitely other potential use cases.


## Why though?
My reasons for wanting a utility function like this are the following:
1) **console.log()** only works for outputting to the console, and can quickly become cumbersome to use when working with objects that have multiple layers of nesting.
2) **JSON.stringify()** is inefficient and has limited formatting options.
3) Importing an entire library like *Lodash* or *Locutus* just to debug a variable is overkill.


## General
My goal is always to keep things as simple as possible, but no simpler. This applies to the code, but even more so to its actual use.


## Help me!
I welcome any improvements, suggestions, advice, or general comments.

I think the following are good general questions to keep in mind at the start of any project, and I would appreciate any help applying them to this one:
1) Does a better version of this already exist? (Stop)
2) Is there a better approach than the one I am using? (Start over)
3) Am I missing any basic functionality? (Keep going)

Beyond the above, any suggestions for additional features are welcome.


## Planned features
1) Add formatting options
	a) An option to isplay object properties with null values
	b) An option to separate lines with indents for compound values, such as arrays or objects

2) Add a configuration file so users can customize default settings according to their preferences


## See it in action
https://malkalypse.github.io/readable/
