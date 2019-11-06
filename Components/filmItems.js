import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import {getImageFromAPI} from '../API/TVDB'

class filmItems extends React.Component {
    render(){
        const film = this.props.film;
        return(
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri:getImageFromAPI(film.poster_path)}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.titre}>{film.title}</Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.footer_container}>
                        <Text style={styles.footer}>Sorie le {film.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        height: 190,
        flexDirection: "row"
    },
    vote:{
        fontSize: 15
    },
    titre:{
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    content_container:{
        flex: 1,
        marginTop: 20
    },
    header_container:{
        flex: 2,
        flexDirection: "row"
    },
    description_container:{
        flex: 7
    },
    footer_container:{
        flex: 1
    },
    image:{
        width: 120,
        height:180,
        margin: 20,
        backgroundColor: 'blue'
    },
    footer:{
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 13
    }
})

export default filmItems