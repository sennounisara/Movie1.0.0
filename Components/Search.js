import React from 'react'
import {ActivityIndicator, StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import films from '../Films/dataFilms'
import FilmItem from './filmItems'
import {getFilmFromApi} from '../API/TVDB'

class Search extends React.Component{

    constructor(props){
        super(props)
        this.page = 0,
        this.totalPages = 0
        this.state = { 
            films : [],
            isLoading : false
        }
        searchedText = ""
    }

    _searchTextInputChanged(text){
        this.setState({searchedText : text})
    }

    _laodFile(){
        this.setState({
            isLoading : true
        })
        getFilmFromApi(this.state.searchedText).then(data => 
            this.setState({
               // films : this.state.films.concat(data.results),
               films : data.results,
                isLoading : false
            })
        )
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
              {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
            </View>
          )
        }
    }

    render(){
        return(
            <View>
                <View style={styles.main_container} flexDirection='row'>
                    <TextInput style={styles.inputText} placeholder="Chercher un film"
                        onSubmitEditing={() => this._laodFile()}
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                    ></TextInput>
                    <Button title="Chercher" onPress={() => this._laodFile()}></Button>
                </View>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    /*onEndReachedThreshold={0.5}
                    onEndReached={()=> {
                        if (this.page < this.totalPages) { 
                            this._loadFilms()
                        }
                    }}*/
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container :{
        marginTop : 30,
        marginLeft :10,
        marginRight :10
    },
    inputText :{
        borderColor : '#000',
        borderWidth : 1,
        paddingLeft:5,
        flex : 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Search