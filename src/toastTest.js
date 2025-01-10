import { toastPush, toastDismiss, toastClear } from '../toaster/toaster'

function testToastTypes() {
    toastPush({
        text: 'on duration (2s)'
    })
    toastPush({
        text: 'Skippable, click to skip (dismissed anyway after specified duration)'
    }, {
        duration: 10000,
        skippable: true,
    })
    toastPush({
        text: 'Interactive, click to progress (will not disappear until user interacted)'
    }, {
        interactive: true,
    })
    toastPush({
        text: 'on hold, can only be programmatically dismissed (you are now stuck)',
        icon: 'warn',
    }, {
        hold: true,
        onQueue: () => {
            setTimeout(() => {
                toastDismiss()
                toastPush({
                    text: 'sike',
                }, {
                    duration: 500,
                    tone: 'shake',
                    onQueue: () => {
                        demo();
                    }
                })
            }, 6000);
        }
    })
}

function testToastButtons() {
    toastPush({
        title: 'A (one)',
        text: 'Button prompt',
        icon: 'warn',
        button: [
            {
                label: 'button',
            },
        ]
    })
    toastPush({
        title: '2 (two)',
        text: 'Buttons prompt',
        icon: 'stop',
        button: [
            {
                label: 'button',
            },
            {
                label: 'buttonS!',
                highlight: true,
            },  
        ]
    })
    toastPush({
        title: '3 (three) buttons',
        text: 'Vertical layout buttons appear when there are more than 2 buttons <br>OR<br> <code>forceVerticalButtons: true</code> is set',
        icon: 'info',
        button: [
            {
                label: 'button',
                onClick: () => {
                    demo()
                },
            },
            {
                label: 'buttonS!',
                onClick: () => {
                    demo()
                },
            },
            {
                label: 'button2',
                highlight: true,
                onClick: () => {
                    demo()
                },
            },
        ]
    })
}

function testToastAnim() {
    toastPush({
        text: 'Fade'
    }, {
        tone: 'fade',
        duration: 500,
    })
    toastPush({
        text: 'Bounce'
    }, {
        tone: 'bounce',
        duration: 1000,
    })
    toastPush({
        text: 'Shake'
    }, {
        tone: 'shake',
        duration: 1000,
    })
    toastPush({
        text: '<b>special: Error</b>'
    }, {
        tone: 'error',
        duration: 1000,
        onQueue: () => {
            demo()
        },
    })
}
function testToastLayout() {
    toastPush({
        text: 'Text content only -toast'
    }, {
        interactive: true,
    })
    toastPush({
        title: 'Title and',
        text: 'Text -toast'
    }, {
        interactive: true,
    })
    toastPush({
        title: 'Icon',
        text: 'and content -toast',
        icon: 'kiwiblowup.jpg',
    }, {
        interactive: true,
        onQueue: () => {
            demo();
        }
    })
}

function testToastPos() {
    toastPush({
        text: 'Center (default)'
    }, {
        position: 'center',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Top'
    }, {
        position: 'top',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Bottom'
    }, {
        position: 'bottom',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Left'
    }, {
        position: 'left',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Right'
    }, {
        position: 'right',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Top Left'
    }, {
        position: 'top_left',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Top Right'
    }, {
        position: 'top_right',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Bottom Left'
    }, {
        position: 'bottom_left',
        tone: 'bounce',
        duration: 500,
    })
    toastPush({
        text: 'Bottom Right'
    }, {
        position: 'bottom_right',
        tone: 'bounce',
        duration: 500,

    })
    toastPush({
        text: '{x: 90, y: 60}'
    }, {
        position: {x: 90, y: 120},
        tone: 'bounce',
        //duration: 2000,
        interactive: true,
        onQueue: () => {
            demo()
        }
    })
}

toastPush({
    title: 'Hi hello',
    text: "Toaster is a toast notification utility designed to be as simple as possible - can be used in both bundler environments and manual."
}, {
    interactive: true,
    onQueue: () => {
        demo()
    },
})

function demo() {
    toastClear()
    toastPush({
        title: 'Demo',
        text: "What would you want to test?",
        icon: 'kiwiblowup.jpg',
        button: [
            {
                label: 'Check repository/documentation',
                highlight: true,
                onClick: () => {
                    location.assign("https://github.com/Potato22/Toaster")
                }
            },
            {
                label: 'Toast layout',
                onClick: () => {
                    testToastLayout()
                }
            },
            {
                label: 'Buttons',
                onClick: () => {
                    testToastButtons()
                }
            },
            {
                label: 'Animation presets',
                onClick: () => {
                    testToastAnim()
                }
            },
            {
                label: 'Toast positions',
                onClick: () => {
                    testToastPos()
                }
            },
            {
                label: 'Toast types',
                onClick: () => {
                    testToastTypes()
                }
            },
            {
                label: 'get me out of here',
                onClick: () => {
                    //toastDismiss()
                    toastPush({
                        text: "App content failed to load: aborted (003)"
                    }, {
                        tone: 'error',
                        duration: 4000,
                    })
                    setTimeout(() => {
                        window.close()
                    }, 4500);
                },
            },
        ]
    }, {
    })
}
