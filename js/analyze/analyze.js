const analyze = (numbers) => {
    const analysis = {
        min: null, 
        max: null,
        average: null,
        length: null,
    };

    analysis.average = 
        numbers.reduce( (total, num) => { return total += num }, 0) / numbers.length;
    
    analysis.min = 
        numbers.reduce( (min, num) => {
            if (min === null) return num;
            return num < min? num : min;
        }, null);
    
    analysis.max = 
        numbers.reduce( (max, num) => {
            if (max === null) return num
            return num > max? num : max;
        }, null);
        
    analysis.length = numbers.length

    return analysis;
};

export default analyze;