const express = require('express')
const bountyRoute = express.Router()
const Bounty = require('./bounty')

bountyRoute.route('/')

    .get((req, res) => {
        Bounty.find((err, bounty) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(bounty)
        })
    }) 

    .post((req, res) => {
        const newBounty = new Bounty(req.body);
        newBounty.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(newBounty);
        });
    })

bountyRoute.route('/:id')

    .get((req, res) => {
        Bounty.findById(req.params.id, (err, bounty) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(bounty)
        });
    })

    .put((req, res) => {
        Bounty.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true},
            (err, bounty) => {
                if (err) return res.status(500).send(err);
                console.log(bounty)
                return res.send({
                        msg: 'Successfully updated Bounty',
                        bounty
                    });
            }
        )
    })

    .delete((req, res) => {
        Bounty.findOneAndDelete({_id: req.params.id}, (err, bounty) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Todo successfully deleted",
                id: bounty._id
            };
            return res.status(200).send(response);
        });
    })

module.exports = bountyRoute
