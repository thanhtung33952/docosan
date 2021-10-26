import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    fontStyle: 'Helvetica',
    padding: 40,
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: 600,
    paddingBottom: 15
  },
  iconProgress: {
    color: theme.palette.grey,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  ul:{
    padding: 0,
    boxShadow: 'rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px',
    borderRadius: 10,
    '&:hover': {
      boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px'
    }
  },
  li: {
    listStyleType: 'none',
    display: 'flex',
    padding: 20
  },
  avatar: {
    borderRadius: 10,
    height: 130
  },
  content: {
    paddingLeft: 10,
    '& h6': {
      fontSize: '1rem',
      fontWeight: 600
    }
  },
  rating: {
    fontSize: '1.25rem'
  },
  nameDocter: {
    fontSize: '0.8rem',
    marginTop: '-2px'
  },
  clinicName: {
    paddingTop: 5,
    fontSize: '0.9rem'
  },
  clinicAddress: {
    fontSize: '0.8rem'
  },
  btnMenu: {
    backgroundColor: theme.palette.green.main + `${'!important'}`,
    color: 'white !important',
    marginLeft: '10px !important',
    lineHeight: '10px !important',
    borderRadius: '50rem !important',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: theme.palette.green.light + `${'!important'}`
    }
  },
  radioGr: {
    backgroundColor: "#ffffff",
    flex: 1,
    display: "flex",
    flexDirection: "columns",
    height: 80,
    paddingLeft: 16,
    "& svg": {
      fontSize: 20,
    },
    "& .Mui-checked": {
      color: theme.palette.green.main
    },
  },
  btnLanguage: {
    backgroundColor: '#fff !important',
    color: '#000 !important',
    marginLeft: '10px !important',
    lineHeight: '10px !important',
    borderRadius: '50rem !important',
    border: '1px solid !important',
    textTransform: 'none !important',
    '&:hover': {
      // backgroundColor: 
    }
  },
  labRadio: {
    "& .Mui-checked": {
      color: theme.palette.green.main + `${'!important'}`,
    },
  }
}));