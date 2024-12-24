import { toastPush, toastDismiss, toastClear } from '../toaster/toaster'

toastPush({
    title: 'Hi hello',
    text: "Toaster is a toast notification utility designed to be as simple as possible - can be used in both bundler environments and manual."
}, {
    interactive: true,
})
toastPush({
    title: 'Demo',
    text: "What would you want to test?",
    icon: 'kiwiblowup.jpg',
    button: [
        {
            label: 'various toast types',
        },
        {
            label: 'buttons',
        },
        {
            label: 'animation presets',
        },
        {
            label: 'toast positions',
        },
        {
            label: 'get me out of here',
            highlight: true,
            onClick: () => {
                toastDismiss()
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
