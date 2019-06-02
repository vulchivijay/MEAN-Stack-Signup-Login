const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

const Tickets = mongoose.model('Tickets');

module.exports.getTickets = (req, res) => {
	Tickets.find((err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in retriving tickets : ' + JSON.stringify(err, undefined, 2)); }
  });
}

module.exports.postTickets = (req, res) => {
	var ticket = new Tickets({
    reporter: req.body.reporter,
    title: req.body.title,
    complexcity: req.body.complexcity,
    createdat: req.body.createdat,
    duedateat: req.body.duedateat,
	  assignee: req.body.assignee
  });
  ticket.save((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error is Tickets save: ' + JSON.stringify(err, undefined, 2)); }
  });
}

module.exports.getTicket = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  Tickets.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in retriving ticket : ' + JSON.stringify(err, undefined, 2)); }
  });
}

module.exports.updateTicket = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  var ticket = {
    reporter: req.body.reporter,
    title: req.body.title,
    complexcity: req.body.complexcity,
    createdat: req.body.createdat,
    duedateat: req.body.duedateat,
	  assignee: req.body.assignee
  }
  Tickets.findByIdAndUpdate(req.params.id, { $set: ticket }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in ticket update : ' + JSON.stringify(err, undefined, 2)); }
  });
}

module.exports.deleteTicket = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
  Tickets.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in ticket delete: ' + JSON.stringify(err, undefined, 2)); }
  });
}