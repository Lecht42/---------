/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
class Encrypter {
    constructor(keys, values, dictionary) {
        this.key_to_value = {};
        this.value_to_keys = {};
        
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = values[i];
            this.key_to_value[key] = value;
            
            if (!(value in this.value_to_keys)) {
                this.value_to_keys[value] = [];
            }
            this.value_to_keys[value].push(key);
        }
        
        this.encrypted_dict_count = {};
        for (const word of dictionary) {
            let encrypted = "";
            let valid = true;
            
            for (const c of word) {
                if (!(c in this.key_to_value)) {
                    valid = false;
                    break;
                }
                encrypted += this.key_to_value[c];
            }
            
            if (valid) {
                if (!(encrypted in this.encrypted_dict_count)) {
                    this.encrypted_dict_count[encrypted] = 0;
                }
                this.encrypted_dict_count[encrypted]++;
            }
        }
    }
    
    /** 
     * @param {string} word1
     * @return {string}
     */
    encrypt(word1) {
        let encrypted = "";
        for (const c of word1) {
            if (!(c in this.key_to_value)) {
                return "";
            }
            encrypted += this.key_to_value[c];
        }
        return encrypted;
    }
    
    /** 
     * @param {string} word2
     * @return {number}
     */
    decrypt(word2) {
        return this.encrypted_dict_count[word2] || 0;
    }
}