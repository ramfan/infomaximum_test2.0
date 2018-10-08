import landing from '../assets/landing.png';

export const theme = {
    landingPage: {

        background: '#000000',
        gradient: {
            color: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)'
        },
        rootHeight: {
            height: '100%',
            width: '100%',
        },

        firstBlock: {
            backgroundImage: `linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%),url(${landing})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX:'center',
            backgroundSize: 'cover',
            width: '80%',
            positionTitle: {height: '100vh' ,left: '0', top: '0', transform: 'translate(70%, 30%)'},
            spans: (fontSize, fontWeight = 'normal') => ({
                color: '#FFFFFF',
                fontSize: fontSize,
                fontWeight: fontWeight
            }),
        },
        secondBlock: {
            paddingBottom: '100px',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            textAlign: 'center',
            line: {
                height: '4px',
                textAlign:'center',
                paddingBottom:'1px',
                background: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)',
                left: '',
                bottom: '',
                noRepeat: '',
            },
            title: {
                color: '#FFFFFF'
            },
            otherText: {marginBottom: '5%'},
            otherTextColor: {color: '#9C9C9C'}
        },
        card: {
            rootStyle: {
                width: '35%', display: 'contents'
            },
            forIcon:{
                textAlign: 'left', display: 'block'
            },
            titleStyle: {
                textAlign: 'left', float: 'left', margin: 'auto'
            } ,
            titleColor: {
                color: '#FFFFFF'
            },
            detail: {
                textAlign: 'left', float: 'left', margin: 'auto'
            },
            detailFont: {
                color: '#9C9C9C', fontSize: '14px'
            }

        },
        cards: {marginTop: '5%', paddingBottom: '10%'},
        freeStyle: {
            background: 'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)',
            //fontSize: '-webkit-xxx-large',
            fontSize: '5em',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            //minWidth: '936px'
        },
        devCard: {
            rootStyle: {padding: '40px'},
            avatarCol: {minHeight: '54px',margin: '0 auto', marginBottom:'10%', overflow:'hidden',padding: '4px', background:'linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%)',borderRadius: '100%'},
            avatar: {display: 'block', borderRadius: '100%'},
            devName: {color: '#FFFFFF',textAlign: 'center', fontSize: '18px'},
            devRole: {color: '#9C9C9C', textAlign: 'center',  fontSize: '14px'},
            social: {textAlign: 'center', color: '#FF9315', fontSize: '14px'},
        }
    },
};