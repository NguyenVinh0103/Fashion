import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize(); // Returns an MMKV Instance

const getString = key => MMKV.getStringAsync(key);

const setString = (key, value) => MMKV.setStringAsync(key, value);

const getBool = async (key, defaultValue = false) => {
    const result = await MMKV.getBoolAsync(key);
    if (result !== undefined && result !== null) {
        return result;
    }
    return defaultValue;
};

const setBool = (key, value) => MMKV.setBoolAsync(key, value);

const getMap = key => MMKV.getMapAsync(key);

const setMap = (key, value) => MMKV.setMapAsync(key, value);

const removeItem = key => MMKV.removeItem(key);

export default {
    getString,
    setString,
    getBool,
    setBool,
    getMap,
    setMap,
    removeItem,

    instance: MMKV,
};
