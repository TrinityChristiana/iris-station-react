// Made by Kurt this is just a card for the products on the home page  using semantic react

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./homecss.css"

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function HomeListCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.root} id="home-card">
        <CardHeader
        //   avatar={
        //     <Avatar aria-label="recipe" className={classes.avatar}>
        //       R
        //     </Avatar>
        //   }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.product.title}
          subheader={props.product.created_at}
        />
        <CardMedia
          className={classes.media}
          image={props.product.image_path}
          title={props.product.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className="text">{props.product.description}</p>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to wishlist">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to card">
            <i className="plus icon"></i>
          </IconButton>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.product.description}
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }