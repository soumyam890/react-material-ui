import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/Posts/Posts';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

class Posts extends Component {
    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensurePostsFetched();
    }

    ensurePostsFetched() {
        this.props.requestPosts(0);
    }

    render() {
        return (
            <div>
                {renderPostsTable(this.props)}
            </div>
        );
    }
}

function renderPostsTable(props) {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={40} justify="center">
                {props.posts.map(post => (
                    <Grid item key={post.title}>
                        <Card style={{ marginLeft: 20, marginTop: 20 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={post.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {post.title}
                                    </Typography>
                                    <Typography component="p">{post.excerpt}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default connect(
    state => state.posts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Posts);
