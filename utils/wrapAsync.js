module.exports = (fn) => {
    return (req, res, next) => {
        // fn (req, res, next).catch((err) => next(err)); //this is mine
        fn (req, res, next).catch(next); // this is maam's
    };
};