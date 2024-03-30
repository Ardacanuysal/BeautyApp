import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const app3 = () => {
  return (
    <View style={{backgroundColor: '#ff8a00', height: windowHeight}}>
      <View
        style={{
          backgroundColor: '#ff8a00',
          marginTop: windowWidth * 0.03,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('./person.png')} />
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
              marginRight: windowWidth * 0.05,
            }}>
            <Image source={require('./search.png')} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginRight: windowWidth * 0.05,
            }}>
            <Image source={require('./cart.png')} />
          </View>
        </View>
      </View>
      <View>
        <Image source={require('./bcycle.png')} />
      </View>
      <ScrollView>
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'white',
            borderRadius: windowWidth * 0.1,
          }}>
          <View
            style={{
              marginTop: windowWidth * 0.07,
              marginLeft: windowWidth * 0.06,
            }}>
            <Text
              style={{
                fontSize: windowWidth * 0.05,
                color: 'black',
                fontWeight: '600',
              }}>
              Categories
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: windowWidth * 0.03,
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                backgroundColor: '#fff9e0',
                width: windowWidth * 0.21,
                height: windowWidth * 0.21,
                borderRadius: windowWidth * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./star.png')} />
            </View>
            <View
              style={{
                backgroundColor: '#ffede5',
                width: windowWidth * 0.21,
                height: windowWidth * 0.21,
                borderRadius: windowWidth * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./search.png')} />
            </View>
            <View
              style={{
                backgroundColor: '#f7eaf5',
                width: windowWidth * 0.21,
                height: windowWidth * 0.21,
                borderRadius: windowWidth * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./heart.png')} />
            </View>
            <View
              style={{
                backgroundColor: '#e6f0e6',
                width: windowWidth * 0.21,
                height: windowWidth * 0.21,
                borderRadius: windowWidth * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./search.png')} />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{marginRight: windowWidth * 0.07}}>
              <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                Rank
              </Text>
            </View>
            <View style={{marginRight: windowWidth * 0.05}}>
              <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                Hot
              </Text>
            </View>
            <View>
              <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                Loved
              </Text>
            </View>
            <View>
              <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                Secrets
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#E6FDFD',
              width: windowWidth,
              height: windowHeight,
              marginTop: windowWidth * 0.05,
              borderRadius: windowWidth * 0.05,
            }}>
            <View
              style={{
                marginTop: windowWidth * 0.07,
                marginLeft: windowWidth * 0.06,
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  color: 'black',
                  fontWeight: '600',
                }}>
                Skin Type
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: windowWidth * 0.03,
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  backgroundColor: '#fff9e0',
                  width: windowWidth * 0.21,
                  height: windowWidth * 0.21,
                  borderRadius: windowWidth * 0.03,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./star.png')} />
              </View>
              <View
                style={{
                  backgroundColor: '#ffede5',
                  width: windowWidth * 0.21,
                  height: windowWidth * 0.21,
                  borderRadius: windowWidth * 0.03,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./search.png')} />
              </View>
              <View
                style={{
                  backgroundColor: '#f7eaf5',
                  width: windowWidth * 0.21,
                  height: windowWidth * 0.21,
                  borderRadius: windowWidth * 0.03,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./heart.png')} />
              </View>
              <View
                style={{
                  backgroundColor: '#e6f0e6',
                  width: windowWidth * 0.21,
                  height: windowWidth * 0.21,
                  borderRadius: windowWidth * 0.03,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./search.png')} />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{marginRight: windowWidth * 0.07}}>
                <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                  Rank
                </Text>
              </View>
              <View style={{marginRight: windowWidth * 0.05}}>
                <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                  Hot
                </Text>
              </View>
              <View>
                <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                  Loved
                </Text>
              </View>
              <View>
                <Text style={{fontSize: windowWidth * 0.04, fontWeight: '700'}}>
                  Secrets
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: windowWidth * 0.04,
                width: windowWidth,
                height: windowHeight * 0.3,
                backgroundColor: 'white',
                borderRadius: windowWidth * 0.05,
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
                    width: windowWidth * 0.85,
                    height: windowWidth * 0.35,
                    marginLeft: windowWidth * 0.045,
                    marginTop: windowWidth * 0.04,
                    borderRadius: windowWidth * 0.05,
                  }}
                  source={require('./krem.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
          <Image source={require('./person.png')} />
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
            marginTop: -windowWidth * 0.08,
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

export default app3;

const styles = StyleSheet.create({});
