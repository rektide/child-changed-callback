# Child Changed Callback

> Call `childChangedCallback` on an element when it's children change

This provides a very quick helper to deal with Custom Element's [inability to see children changing](https://github.com/w3c/webcomponents/issues/619), implementing a childrenChangedCallback detection via MutationObserver.
