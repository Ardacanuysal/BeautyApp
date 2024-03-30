import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const app1 = () => {
  return (
    <View style={{backgroundColor: '#ff8a00', height: windowHeight}}>
      <View
        style={{
          backgroundColor: '#ff8a00',
          marginTop: windowWidth * 0.1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('./star.png')} />
          </View>
          <View style={{paddingTop: windowWidth * 0.02}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>
              KETY
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              marginRight: windowWidth * 0.0,
            }}>
            <Image
              style={{
                width: windowWidth * 0.04,
                height: windowHeight * 0.04,
                alignItems: 'center',
              }}
              source={require('./search.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginRight: windowWidth * 0.05,
            }}>
            <Image
              style={{
                width: windowWidth * 0.04,
                height: windowHeight * 0.04,
              }}
              source={require('./cart2.png')}
            />
          </View>
        </View>
      </View>
      <View>
        <Image source={require('./bcycle.png')} />
      </View>
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          backgroundColor: 'white',
          borderRadius: windowWidth * 0.1,
        }}>
        <View
          style={{
            marginTop: windowWidth * 0.08,
            marginLeft: windowWidth * 0.06,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            Featured Products
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View
              style={{
                backgroundColor: '#0000001B',
                width: windowWidth * 0.5,
                height: windowWidth * 0.6,
                borderRadius: windowWidth * 0.07,
                margin: windowWidth * 0.05,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginTop: windowWidth * 0.025,
                    marginLeft: windowWidth * 0.025,
                  }}>
                  <Image
                    style={{
                      borderRadius: windowWidth * 0.1,
                      width: windowWidth * 0.13,
                      height: windowWidth * 0.13,
                    }}
                    source={require('./person.png')}
                  />
                </View>
                <View
                  style={{
                    marginTop: windowWidth * 0.035,
                    marginLeft: windowWidth * 0.025,
                  }}>
                  <Text style={{fontSize: 15, fontWeight: '600'}}>
                    Amelia Nelson
                  </Text>
                  <Text style={{color: 'gray'}}>Actress</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{
                    resizeMode: 'stretch',
                    width: windowWidth * 0.5,
                    height: windowWidth * 0.45,
                    borderRadius: windowWidth * 0.08,
                  }}
                  source={require('./krem.png')}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#0000001B',
                width: windowWidth * 0.5,
                height: windowWidth * 0.6,
                borderRadius: windowWidth * 0.07,
                margin: windowWidth * 0.05,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '0000001B',
                    marginTop: windowWidth * 0.025,
                    marginLeft: windowWidth * 0.025,
                  }}>
                  <Image
                    style={{
                      borderRadius: windowWidth * 0.1,
                      width: windowWidth * 0.13,
                      height: windowWidth * 0.13,
                    }}
                    source={require('./person.png')}
                  />
                </View>
                <View
                  style={{
                    marginTop: windowWidth * 0.035,
                    marginLeft: windowWidth * 0.025,
                  }}>
                  <Text style={{fontSize: 15, fontWeight: '600'}}>
                    Amelia Nelson
                  </Text>
                  <Text style={{color: 'gray'}}>Actress</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{
                    resizeMode: 'stretch',
                    width: windowWidth * 0.5,
                    height: windowWidth * 0.45,
                    borderRadius: windowWidth * 0.08,
                  }}
                  source={require('./krem.png')}
                />
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            marginLeft: windowWidth * 0.06,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            Featured Products
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#0000001B',
              width: windowWidth * 0.5,
              height: windowWidth * 0.6,
              borderRadius: windowWidth * 0.07,
              margin: windowWidth * 0.05,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: windowWidth * 0.025,
                  marginLeft: windowWidth * 0.025,
                }}>
                <Image
                  style={{
                    borderRadius: windowWidth * 0.3,
                    width: windowWidth * 0.13,
                    height: windowWidth * 0.13,
                  }}
                  source={require('./person.png')}
                />
              </View>
              <View
                style={{
                  marginTop: windowWidth * 0.035,
                  marginLeft: windowWidth * 0.025,
                }}>
                <Text style={{fontSize: 15, fontWeight: '600'}}>
                  Amelia Nelson
                </Text>
                <Text style={{color: 'gray'}}>Actress</Text>
              </View>
            </View>
            <View>
              <Image
                style={{
                  resizeMode: 'stretch',
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.45,
                  borderRadius: windowWidth * 0.08,
                }}
                source={require('./krem.png')}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#0000001B',
              width: windowWidth * 0.5,
              height: windowWidth * 0.6,
              borderRadius: windowWidth * 0.07,
              margin: windowWidth * 0.05,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  marginTop: windowWidth * 0.025,
                  marginLeft: windowWidth * 0.025,
                }}>
                <Image
                  style={{
                    borderRadius: windowWidth * 0.1,
                    width: windowWidth * 0.13,
                    height: windowWidth * 0.13,
                  }}
                  source={require('./person.png')}
                />
              </View>
              <View
                style={{
                  marginTop: windowWidth * 0.035,
                  marginLeft: windowWidth * 0.025,
                }}>
                <Text style={{fontSize: 15, fontWeight: '600'}}>
                  Amelia Nelson
                </Text>
                <Text style={{color: 'gray'}}>Actress</Text>
              </View>
            </View>
            <View>
              <Image
                style={{
                  resizeMode: 'stretch',
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.45,
                  borderRadius: windowWidth * 0.08,
                }}
                source={require('./krem.png')}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: windowHeight * 0.91,
          position: 'absolute',
          flexDirection: 'row',
          backgroundColor: 'white',
          width: windowWidth,
          height: windowWidth * 0.2,
          justifyContent: 'space-around',
          paddingTop: windowWidth * 0.04,
        }}>
        <View>
          <Image source={require('./home.png')} />
        </View>
        <View>
          <Image
            style={{
              width: windowWidth * 0.3,
            }}
            source={require('./kare.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: windowWidth * 0.18,
            height: windowWidth * 0.18,
            borderRadius: windowWidth * 0.5,
          }}></View>
        <View
          style={{
            backgroundColor: '#f5f6f7',
            width: windowWidth * 0.18,
            height: windowWidth * 0.18,
            borderRadius: windowWidth * 0.5,
            position: 'absolute',
            marginLeft: windowWidth * 0.39,
            marginTop: windowWidth * 0.08,
          }}></View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#ff8a00',
            width: windowWidth * 0.14,
            height: windowWidth * 0.14,
            borderRadius: windowWidth * 0.5,
            marginLeft: windowWidth * 0.41,
            marginTop: -windowWidth * 0.06,
            elevation: windowWidth * 0.02,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: windowWidth * 0.1}}>+</Text>
          </View>
        </View>
        <View>
          <Image source={require('./zil.png')} />
        </View>
        <View>
          <Image source={require('./person2.png')} />
        </View>
      </View>
    </View>
  );
};

export default app1;

const styles = StyleSheet.create({});
