import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import ScrollToTop from 'react-scroll-to-top';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    // to change the state of the website dynamically 
    //here by deafult :- article is empty , page is at no. 1Page , loading image is not shown thus false
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    // 3) In the url write => country=in,&category=...,&pageSize=15(props used here) and &page=1.   //Read NewsAPI Documentation for more info
    // 2) 'this.setState' helps to call the things you need in the state , in this case - the 'articles' array is needed to fetch all the news article and 'totalResults' is needed to calculate the no. of results to display in each page
    // 1)this is where the app is first started-->
    async componentDidMount() {
        let mainNewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e80c11ca1394dfd8e655e87cd454fb6&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });           //before fetching the data show loading icon
        let data = await fetch(mainNewsUrl);        //await for data to be fetched 
        let parsedData = await data.json();    //then await for the data to be converted to JSON and then set state 
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    // Function to go to previous page
    handlePreviousPage = async () => {
        let mainNewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e80c11ca1394dfd8e655e87cd454fb6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });                //before fetching the data show loading icon
        let data = await fetch(mainNewsUrl);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false                              //loading icon become false here as data is fetched
        })
    }

    // Function to go to Next Page
    handleNextPage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
        }
        else {
            let mainNewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e80c11ca1394dfd8e655e87cd454fb6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });                //before fetching the data show loading icon
            let data = await fetch(mainNewsUrl);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false                              //loading icon become false here as data is fetched
            })
        }
    }


    render() {
        return (
            <>
                <div className='container my-3'>
                    <h1 className='text-center mt-5'><u>NewsMojo - Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</u></h1>
                    {/* for adding a loading icon */}
                    {this.state.loading && <Spinner />}
                    <div className="row ">
                        {/* show loading icon until is API is fetched */}
                        {!this.state.loading && this.state.articles.map((khobor) => {
                            return (
                                <>
                                    {/* ---- md=medium devices take 3 columns ----*/}
                                    {/* Always give a key  */}
                                    {/* khobor.name-in-json_file  */}
                                    {/* Ternary operator to check if anytime description is null  */}
                                    <div className="col-md-4" key={khobor.url}>
                                        <NewsItem
                                            title={khobor.title.slice(0, 35)}
                                            desc={khobor.description ? khobor.description.slice(0, 55) : ""}
                                            imgurl={khobor.urlToImage}
                                            newsURL={khobor.url}
                                            author={khobor.author}
                                            date={khobor.publishedAt}
                                            source={khobor.source.name} />
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className="container d-flex justify-content-between my-3">
                        {/* disabled button to indicate there are no more page before or after */}
                        <button disabled={this.state.page <= 1} className="btn btn-info" onClick={this.handlePreviousPage}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-info" onClick={this.handleNextPage}>Next &rarr;</button>

                        {/* <ScrollToTop smooth /> */}
                    </div>
                </div>
            </>
        )
    }
}

export default News;