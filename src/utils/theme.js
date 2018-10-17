/* eslint-disable import/prefer-default-export */
import landing from '../assets/landing.png';

export const theme = {
    background: 'linear-gradient(to right, #EE0C28, #FF9315)',
    linkStyle: {
        textDecoration: 'none',
        color: '#000000',
    },
    landingPage: {

        background: '#000000',
        gradient: {
            color: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)',
        },
        rootHeight: {
            height: '100%',
            width: '100%',
        },

        firstBlock: {
            backgroundImage: `linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%),url(${landing})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundSize: 'cover',
            width: '80%',
            positionTitle: {
                height: '100vh', left: '0', top: '0', transform: 'translate(70%, 30%)',
            },
            spans: (fontSize, fontWeight = 'normal') => ({
                color: '#FFFFFF',
                fontSize,
                fontWeight,
            }),
        },
        secondBlock: {
            paddingBottom: '100px',
            height: '100vh',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            textAlign: 'center',
            line: {
                height: '4px',
                textAlign: 'center',
                paddingBottom: '1px',
                background: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)',
                left: '',
                bottom: '',
                noRepeat: '',
            },
            title: {
                color: '#FFFFFF',
            },
            otherText: { marginBottom: '5%' },
            otherTextColor: { color: '#9C9C9C' },
        },
        card: {
            rootStyle: {
                width: '35%', display: 'contents',
            },
            forIcon: {
                textAlign: 'left', display: 'block',
            },
            titleStyle: {
                textAlign: 'left', float: 'left', margin: 'auto',
            },
            titleColor: {
                color: '#FFFFFF',
            },
            detail: {
                textAlign: 'left', float: 'left', margin: 'auto',
            },
            detailFont: {
                color: '#9C9C9C', fontSize: '14px',
            },

        },
        cards: { marginTop: '5%', paddingBottom: '10%' },
        freeStyle: {
            background: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)',
            // fontSize: '-webkit-xxx-large',
            fontSize: '5em',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            // minWidth: '936px'
        },
        devCard: {
            rootStyle: { padding: '40px' },
            avatarCol: {
                minHeight: '54px', margin: '0 auto', marginBottom: '10%', overflow: 'hidden', padding: '4px', background: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)', borderRadius: '100%',
            },
            avatar: { display: 'block', borderRadius: '100%' },
            devName: { color: '#FFFFFF', textAlign: 'center', fontSize: '18px' },
            devRole: { color: '#9C9C9C', textAlign: 'center', fontSize: '14px' },
            social: { textAlign: 'center', color: '#FF9315', fontSize: '14px' },
        },
    },
    LeftBlock: {
        mainPage: {
            rootStyle: {
                position: 'fixed', padding: 0, marginTop: '5%',
            },
            item: {
                paddingLeft: '20px', paddingTop: 'inherit', paddingBottom: 'inherit', cursor: 'pointer',
            },
            logo: {
                display: 'flex',
                padding: '15px',
            },
            logoColor: {
                background: 'linear-gradient(to left, rgba(255, 147, 21, 1) 0%, rgba(238, 12, 40, 1) 100%)',
                // fontSize: '-webkit-xxx-large',
                '-webkit-background-clip': 'text',
                color: 'transparent',
            },
            info: {
                paddingLeft: '14px', fontSize: '80%', display: 'inline-block', minWidth: '180px', color: '#9C9C9C',
            },
            buttonRow: {
                display: 'inline-block', lineHeight: '19px', marginLeft: '5%', marginBottom: '10%',
            },
            buttonCol: {
                display: 'block',
                background: 'linear-gradient(to left, rgba(255, 147, 21, 1) 0%, rgba(238, 12, 40, 1) 100%)',
                borderRadius: '15px',
                padding: '1px',
            },
            customButton: {
                width: 'max-content',
                fontSize: 'smaller',
                padding: '8px 30px 9px 38px',
            },
        },
    },
    paddingNull: { padding: 0 },
    authForm: {
        rootStyle: {
            background: 'rgba(0, 0, 0, 0.8)', width: '100%', height: '100vh', position: 'fixed', zIndex: 98, margin: 0,
        },
        upperHelpRow: { height: '10vh', width: '100%', marginLeft: 0 },
        lowerHelpRow: { height: '100vh', width: '100%', marginLeft: 0 },
        baseColumn: {
            background: 'red', margin: '0 auto', marginBottom: 0, marginRight: 0,
        },
        formColumn: { background: '#FFFFFF', margin: '0 auto', marginRight: 0 },
        activeColumn: {
            textAlign: 'center', borderBottom: '1px solid #EE0C28', cursor: 'pointer', paddingRight: 0, paddingLeft: 0,
        },
        activeSpan: (MarginTop = '5%', letSpacing = 'initial') => ({
            display: 'block', marginTop: MarginTop, color: '#EE0C28', fontSize: '14px', letterSpacing: letSpacing,
        }),
        disActiveSpan: (MarginTop = '5%', letSpacing = 'initial') => ({
            display: 'block', marginTop: MarginTop, color: 'rgba(0, 0, 0, 0.6)', cursor: 'pointer', fontSize: '14px', letterSpacing: letSpacing,
        }),
        disActiveColumn: { textAlign: 'center' },
        headerRow: { height: '50px', marginBottom: '10%' },
        renderFieldButton: {
            textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', cursor: 'pointer', color: '#EE0C28', display: 'block',
        },
        socialBlock: {
            title: { textAlign: 'center', color: '#FFFFFF' },
            Icon: { display: 'block', margin: '0 auto' },
            Icons: { padding: '30px' },
            root: { background: 'linear-gradient(to right, #EE0C28, #FF9315)', marginBottom: '10%', padding: '30px' },
        },
    },
    clickElement: {
        cursor: 'pointer',
    },
    LinkStyle: {
        textDecoration: 'none',
    },
    systemLayout: { background: '#E5E5E5', height: '100vh', padding: '50px 100px 100px 100px' },
    event: {
        root: { margin: '0 auto', background: 'white' },
        description: { fontSize: '10px', letterSpacing: '1.5px', lineHeight: '12px' },
        title: { fontSize: '24px' },
        subscribe: { fontSize: '14px', lineHeight: '20px', color: 'rgba(0, 0, 0, 0.6)' },
        iconSection: { overflow: 'hidden' },
        eventIcon: { height: '50px' },
    },
    dispaly: ({ disPlay = 'block' }) => ({
        display: disPlay,
    }),
};