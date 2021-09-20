exports.do = function (req, res, vals) {
    var val = parseInt(vals.first) * parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The Multiply is: ");
    res.write(String(val));
    res.write("</p>");
    res.write("<a href=\"javascript:history.back()\">Go Back</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};