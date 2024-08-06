// controllers/itemController.js
const Item = require("../models/Item")

class ItemController {
  // Create a new item
  static async create(req, res) {
    try {
      const item = new Item(req.body)
      await item.save()
      res.status(201).json(item)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  // Get all items
  static async getAll(req, res) {
    try {
      const items = await Item.find()
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  }

  // Get a single item by ID
  static async getById(req, res) {
    try {
      const item = await Item.findById(req.params.id)
      if (!item) return res.status(404).json({message: "Item not found"})
      res.status(200).json(item)
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  }

  // Update an item by ID
  static async update(req, res) {
    try {
      const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
      if (!item) return res.status(404).json({message: "Item not found"})
      res.status(200).json(item)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  // Delete an item by ID
  static async delete(req, res) {
    try {
      const item = await Item.findByIdAndDelete(req.params.id)
      if (!item) return res.status(404).json({message: "Item not found"})
      res.status(200).json({message: "Item deleted"})
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  }
}

module.exports = ItemController
