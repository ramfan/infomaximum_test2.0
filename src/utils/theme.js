/* eslint-disable import/prefer-default-export,max-len */
import landing from '../assets/landing.png';

export const theme = {
    background: 'linear-gradient(to right, #EE0C28, #FF9315)',
    linkStyle: {
        textDecoration: 'none',
        color: '#000000',
    },
    marginNull: { margin: 0 },
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
            WebkitBackgroundClip: 'text',
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
                WebkitBackgroundClip: 'text',
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
            textAlign: 'center', display: 'block', borderBottom: '1px solid #EE0C28', cursor: 'pointer', paddingRight: 0, paddingLeft: 0, color: '#EE0C28', textDecoration: 'none',
        },
        activeSpan: (MarginTop = '5%', letSpacing = 'initial') => ({
            display: 'block', marginTop: MarginTop, color: '#EE0C28', fontSize: '14px', letterSpacing: letSpacing,
        }),
        disActiveSpan: (MarginTop = '5%', letSpacing = 'initial') => ({
            // display: 'block', marginTop: MarginTop, color: 'rgba(0, 0, 0, 0.6)', cursor: 'pointer', fontSize: '14px', letterSpacing: letSpacing,
            display: 'block', marginTop: MarginTop, cursor: 'pointer', fontSize: '14px', letterSpacing: letSpacing, textDecoration: 'none',
        }),
        disActiveColumn: {
            display: 'block', textAlign: 'center', textDecoration: 'none', color: 'rgba(0, 0, 0, 0.6)', borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
        headerRow: { height: '50px', marginBottom: '10%' },
        renderFieldButton: (color = '#EE0C28') => ({
            textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', cursor: 'pointer', color, display: 'block', fontWeight: 600, letterSpacing: '0.75px', fontSize: '14px',
        }),
        socialBlock: {
            title: { textAlign: 'center', color: '#FFFFFF' },
            Icon: { display: 'block', margin: '0 auto' },
            Icons: { padding: '30px' },
            root: { background: 'linear-gradient(to right, #EE0C28, #FF9315)', marginBottom: '10%', padding: '30px' },
        },
    },
    clickElement: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
        display: 'flex',
    },
    LinkStyle: {
        textDecoration: 'none',
    },
    systemLayout: {
        background: 'rgba(229, 229, 229, 0.5)', padding: '44px 100px 100px 100px', height: '100%',
    },
    event: {
        root: { margin: '0 auto', background: 'white' },
        description: { fontSize: '10px', letterSpacing: '1.5px', lineHeight: '12px' },
        title: { fontSize: '24px' },
        subscribe: { fontSize: '14px', lineHeight: '20px', color: 'rgba(0, 0, 0, 0.6)' },
        iconSection: { overflow: 'hidden' },
        eventIcon: { height: '50px' },
    },
    display: ({ disPlay = 'block' }) => ({
        display: disPlay,
    }),
    dashBoardParticipant: {
        Command: {
            marginBottom: '5%',
        },
        CreateCommand: {
            col: {
                background: 'white',
                padding: '20px',
            },
            row: { margin: 'auto' },
            span: { fontSize: '34px', letterSpacing: '0.25px' },
        },
        ParticipantProfile: {
            profile: { margin: '1%', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px' },
        },
        EventsRow: { margin: '1%' },
        EventsColumns: {
            width: '33%', background: 'white', boxShadow: 'rgba(0, 0, 0, 0.8) 2px 3px 4px -1px', position: 'relative', overflow: 'hidden',
        },
        MiddleColumn: {
            TopColumn: {
                margin: ' 0% 0 0% 0%', background: 'white', top: 0, height: '49%', position: 'absolute',
            },
            BottomColumn: {
                margin: ' 0% 0 0% 0%', background: 'white', bottom: 0, height: '49%', position: 'absolute',
            },
        },
        AdditionalDescription: {
            width: '100%',
        },
        CommandVacancy: {
            rootStyle: { position: 'relative', height: '100%' },
            avatar: { padding: '10px' },
        },
        NewEvent: {
            rootStyle: { position: 'relative', height: '100%' },
            avatar: { width: 'inherit' },
            buttonBlock: { padding: '16px' },
        },
        NewEventButton: {
            position: 'absolute', bottom: 0, width: '100%', marginBottom: '3%',
        },
        RowDescription: { margin: 0, paddingBottom: '16px' },
        VacancyDescription: {
            rootStyle: { paddingBottom: '86px' },
            row: { margin: 0, marginTop: '5%', padding: 0 },
        },
        VacancyTitle: {
            rootStyle: { margin: 0, marginTop: '5%', padding: 0 },
            span: { fontSize: '10px', letterSpacing: '1.5px' },
        },
        YourCard: {
            rootStyle: { background: 'white', padding: '16px 30px 16px 30px' },
            row: { margin: '1%' },
            title: { fontSize: '10px', letterSpacing: '1.5px' },
            name: { fontSize: '24px' },
            icon: { width: '50%', float: 'right' },
        },
    },
    dashBoardSystem: {
        DashBoardSystemLayout: {
            rootStyle: { height: '100vh' },
            row: { marginBottom: '1%' },
            rowCard: { height: '540px' },
        },
        EventCard: {
            rootStyle: { width: '33%', background: 'white' },
            title: {
                marginLeft: 0,
                marginRight: 0,
                marginTop: '1%',
                font: {
                    fontSize: '24px',
                },
            },
            counter: {
                marginLeft: 0, marginRight: 0, marginTop: '1%', padding: '20px 15px',
            },
            subTitle: {
                fontSize: '14px',
                color: 'rgba(0, 0, 0, 0.54)',
            },
            span: {
                fontSize: '60px',
                fontWeight: '100',
            },
            switches: {
                marginLeft: 0, marginRight: 0, marginTop: '1%', display: 'block', height: '40px',
            },
        },
        Stats: {
            rootStyle: { display: 'block', margin: '0 auto', color: 'black' },
            dot: Background => ({
                width: '30px', height: '30px', display: 'block', borderRadius: '50%', background: Background,
            }),
            statItem: {
                display: 'table', margin: '0 auto', color: 'rgba(0, 0, 0, 0.54)', padding: '12px',
            },
        },
        Thematics: {
            margin: '1%',
        },
        CreateEvent: { marginBottom: '5%' },
        CreateForm: {
            rootStyle: { background: 'white', padding: '20px' },
            row: { margin: 'auto' },
        },
        DateOfEvent: { marginTop: '5%' },
        Detail: {
            row: { display: 'block', margin: '1%' },
            expert: { padding: '0 0 0 15px' },
            social: { fontSize: '14px', color: '#EE0C28' },
        },
        EventPlace: { marginTop: '5%' },
        Profile: {
            rootStyle: { background: 'white', padding: '48px' },
            eventInfo: { margin: 'auto' },
            logo: { width: '100%', height: 'auto', float: 'right' },
        },
        ProfileEventDescription: {
            rootStyle: { marginTop: '5%' },
            description: { fontSize: '13px', color: 'rgba(0, 0, 0, 0.54)' },
        },
        ProfileEventEdit: {
            rootStyle: { marginTop: '2%' },
            img: { height: '14px' },
            edit: {
                fontSize: '14px', letterSpacing: '0.75px', color: '#EE0C28', paddingLeft: 'inherit',
            },
        },
        ProfileEventTitle: { fontSize: '34px', letterSpacing: '0.25px' },
        ProfileSwitches: {
            padding: '30px', marginTop: '1%',
        },
    },
    AuthForm: {
        rootStyle: { padding: ' 0 30px 30px 30px' },
        button: { marginTop: '3%' },
        role: { marginBottom: '3%' },
    },
    Navigate: {
        exit: { marginTop: '25%', marginBottom: '5%', padding: '10px' },
        unExit: { marginTop: '5%', marginBottom: '5%', padding: '10px' },
    },
    CreateButton: {
        rootStyle: { marginTop: '2%' },
        create: {
            fontSize: '14px',
            letterSpacing: '0.75px',
            background: '#EE0C28',
            color: 'white',
            padding: '10px 30px 12px 30px',
            borderRadius: '4px',
        },
        cancel: {
            letterSpacing: '0.75px',
            fontSize: '14px',
            color: '#EE0C28',
        },
    },
    Description: { fontSize: '14px' },
    Inscription: {
        display: 'block', color: '#AAAAAA', fontSize: '11px',
    },
    Subscription: {
        display: 'flex', color: '#AAAAAA', fontSize: '14px',
    },
    FormField: {
        width: '100%',
        height: '30px',
        border: 'none',
        borderBottom: '1px solid #D2D2D2',
        marginTop: '2%',
        marginBottom: '2%',
    },
    CommandForm: { fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' },
    GoBack: {
        rootStyle: { display: 'flex' },
        img: { height: '19px' },
    },
    EventForm: {
        col: { fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }
    },
};