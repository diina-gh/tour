import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Badge, Surface, Text, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../utils/colors'

const IconSize = 24;

export const Header = ({
	style,
	menu,
	onPressMenu,
	back,
	onPressBack,
	title,
	right,
	rightComponent,
	onRightPress,
	optionalBtn,
	optionalBtnPress,
	headerBg = "#fefaf9",
	iconColor = 'black',
	titleAlight,
	optionalBadge,
    profil
}) => {

	const LeftView = () => (
		<View style={styles.view}>
			{menu && <TouchableOpacity onPress={onPressMenu}>
				<Feather name="menu" size={IconSize} color={iconColor} />
			</TouchableOpacity>}
			{back && 
                <TouchableOpacity onPress={onPressBack}>
                    <Feather name="arrow-left" size={IconSize} color={iconColor} />
                </TouchableOpacity>
            }
            {profil &&
                <div style={styles.profilContainer}>
                    <div style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-ludmilla-diniz-3766344.jpg?alt=media&token=7d03b0aa-d4ac-44d5-9dd9-6ec4e60c9e07'}} />
                    </div>
                    <div style={styles.greetings}>
                        <Text style={{ fontSize: 12.5, color: 'gray', marginBottom: 3 }}>
                            Bienvenue
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500}}>
                            Oumou GUEYE
                        </Text>
                    </div>
                </div>
            }
		</View>
	)
	const RightView = () => (
		rightComponent ? rightComponent :
			<View style={[styles.view, styles.rightView]}>
				{optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
					<Feather name={optionalBtn} size={IconSize} color={iconColor} />
					{optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
				</TouchableOpacity>}
				{right !== '' && <TouchableOpacity onPress={onRightPress}>
					<Feather name={right} size={IconSize} color={iconColor} />
				</TouchableOpacity>}
			</View>
	)
	const TitleView = () => (
		<View style={styles.titleView}>
			<Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
		</View>
	)
	return (
		<Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
			<LeftView />
            {title && 
              <TitleView />
            }
			{/* <RightView /> */}
		</Surface>
	)
}


const styles = StyleSheet.create({
	header: {
		height: 65,
		elevation: 0,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
        fontFamily: 'lucida grande',
	},
	view: {
		marginHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleView: {
		flex: 1,
	},
	rightView: {
		justifyContent: 'flex-end',
	},
	rowView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
	},

    profilContainer:{
        width: 200,
        display: 'flex',
		flexDirection: 'row',
        marginRight: 5,

    },

    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#ede6e7",
        marginRight: 10,

    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },

    greetings: {
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

})