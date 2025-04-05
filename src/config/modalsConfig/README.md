This config file centralizes IDs and display types of each modal.
New modals or modifications on existing modals should be added here.


This file should be imported and used in every function or component that mentions a modal ID or display type, this way those values can be **changed once and updated everywhere**.

The exception is [display: none], there's no need to centralize the 'none' value because it is always utilized to hide modals.