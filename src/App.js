import React, {useState, useEffect} from 'react';
import './App.css';
import datas from './data.json';
//material
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// helpers
import { isNullOrUndefined } from './utils/helpers';
// jss
import useStyles from './assets/jss/App';
import theme from './theme';
export default function App() {
  const classes = useStyles();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [valueRadio, setValueRadio] = useState('Khoảng cách');
  const [valueRadioL, setValueRadioL] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorElDistance, setAnchorElDistance] = useState(null);
  const openDistance = Boolean(anchorElDistance);

  useEffect(() => {
    setisLoading(true);
    let newdata = [...datas]
    setisLoading(false);
    setData(newdata);
    if (valueRadio === 'Khoảng cách') {
      setData((data) => {
        const dataToSort = [...data];
        dataToSort.sort((a, b) => Number(a.distance) - Number(b.distance));
        return dataToSort;
      });
    }
    if (valueRadio === 'Đánh giá') {
      setData((data) => {
        const dataToSort = [...data];
        dataToSort.sort((a, b) => Number(b.rating) - Number(a.rating));
        return dataToSort;
      });
    }
  }, [datas, valueRadio, valueRadioL])
  //handle click evaluate
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };  
  //close evaluate
  const handleClose = () => {
    setAnchorEl(null);
  };
  //handle click Distance
  const handleClickDistance = (event) => {
    setAnchorElDistance(event.currentTarget);
  };
  
  //close Distance
  const handleCloseDistance = () => {
    setAnchorElDistance(null);
  };
  //handle radio
  const handleChangeRadio = (event) => {
    setValueRadio(event.target.value);
  };
  //handle radio language
  const handleChangeRadioL = (event) => {
    setValueRadioL(event.target.value);
  };
  // 
  let dataFilters = data.filter(e => e.language.indexOf(valueRadioL) !== -1);
  // console.log(dataFilters)
  if(isNullOrUndefined(valueRadioL)) {
    dataFilters = data
  }
console.log(dataFilters)
  // render DataDocter
  const DataDocter = [];
  dataFilters.length > 0 &&
  dataFilters.map((row, i) => {
    DataDocter.push(
      <ul key={i} className={classes.ul}>
        <div >
          <li className={classes.li}>
            <img src={row.avatar} className={classes.avatar} alt='img' />
            <div className={classes.content}>
              <Typography variant="h6" >{row.display_name}</Typography>
              <Rating
                name="text-feedback"
                value={row.rating}
                readOnly
                className={classes.rating}
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <div>
                {row.specialty.map((x, i) => {
                  return (
                    <Typography
                      key={i} 
                      className={classes.nameDocter}
                      >
                        Bác sĩ {x.name}
                    </Typography>
                  )
                })}
              </div>
              <Typography className={classes.clinicName}>
                {row.clinic_name}
              </Typography>
              <Typography className={classes.clinicAddress}>
                {row.clinic_address.split(',', 1)}
              </Typography>
            </div>
          </li>
        </div>
      </ul>
    )
  });
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Danh sách bác sĩ</Typography>
      <div className={classes.handle}>
        <span>Sắp xếp theo</span>
        <Button
          id="button"
          className={classes.btnMenu}
          aria-expanded={openDistance ? 'true' : undefined}
          onClick={handleClickDistance}
        >
          {valueRadio}
        </Button>
        <Menu
          id="menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorElDistance}
          open={openDistance}
          onClose={handleCloseDistance}
          TransitionComponent={Fade}
        >
          <RadioGroup
            name="radioGr"
            id="radioGr"
            className={classes.radioGr}
            value={valueRadio}
            onChange={(e) => handleChangeRadio(e)}
          >
            <FormControlLabel
              classes={{ label: classes.labRadio }}
              value= 'Khoảng cách'
              control={
                <Radio sx={{
                  '&.Mui-checked': {
                    color: theme.palette.green.main,
                  },
                }}/>
              }
              label="Khoảng cách"
            />
            <FormControlLabel
              classes={{ label: classes.labRadio }}
              value= 'Đánh giá'
              control={
                <Radio sx={{
                  '&.Mui-checked': {
                    color: theme.palette.green.main,
                  },
                }}/>
              }
              label="Đánh giá"
            />
          </RadioGroup>
        </Menu>
        <span style={{paddingLeft: 10}}>Lọc kết quả</span>
        <Button
          id="buttonLanguage"
          className={classes.btnLanguage}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {valueRadioL === 'vi' ? 'Tiếng việt': valueRadioL === 'en' ? 'English' : valueRadioL === 'fr' ? 'francaise' : 'Ngôn ngữ'}
        </Button>
        <Menu
          id="menuLanguage"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <RadioGroup
            name="radioGr"
            id="radioGr"
            className={classes.radioGr}
            style={{height: 'auto'}}
            value={valueRadioL}
            onChange={(e) => handleChangeRadioL(e)}
          >
          <FormControlLabel
            classes={{ label: classes.labRadio }}
            value= ''
            control={
              <Radio sx={{
                '&.Mui-checked': {
                  color: theme.palette.green.main,
                },
              }}/>
            }
            label="none"
          />
            <FormControlLabel
              classes={{ label: classes.labRadio }}
              value= 'vi'
              control={
                <Radio sx={{
                  '&.Mui-checked': {
                    color: theme.palette.green.main,
                  },
                }}/>
              }
              label="Tiếng việt"
            />
            <FormControlLabel
              classes={{ label: classes.labRadio }}
              value= 'en'
              control={
                <Radio sx={{
                  '&.Mui-checked': {
                    color: theme.palette.green.main,
                  },
                }}/>
              }
              label="English"
            />
            <FormControlLabel
              classes={{ label: classes.labRadio }}
              value= 'fr'
              control={
                <Radio sx={{
                  '&.Mui-checked': {
                    color: theme.palette.green.main,
                  },
                }}/>
              }
              label="Francies"
            />
          </RadioGroup>
        </Menu>
      </div>
      <div>
      {isLoading ? (
        <div>
          <CircularProgress
            size={50}
            className={classes.iconProgress}
          />
        </div>
      ) : isNullOrUndefined(DataDocter) ? (
        <div>
          No data
        </div>
      ) : ( DataDocter )}
      </div>
    </div>
  );
}

