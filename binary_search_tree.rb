require_relative './tree_node'
# bt = BinarySearchTree.new
# bt['Hello'] = 20
# bt['World'] = 50
# bt['Matz'] = 60
# puts bt[50]
class BinarySearchTree
  attr_accessor :root, :size
  def initialize
    @root = nil
    @size = 0
  end

  def length
    size
  end

  def put(key, val)
    if root
      _put(key, val, root)
    else
      self.root = TreeNode.new(key: key, val: val)
    end
    self.size = self.size + 1
  end

  def []=(value, key)
    put(key, value)
  end

  def [](key)
    get(key)
  end

  def get(key)
    if root
      res = _get(key, root)
      res ? res.val : nil
    else
      nil
    end
  end

  def contains?(key)
    get(key) ? true : false
  end

  def delete(key)
    if size > 1
      node_to_remove = _get(key, root)
      if node_to_remove
        _remove(node_to_remove)
        self.size = self.size - 1
      else
        fail 'Not Key in Tree'
      end
    elsif size == 1 && root.key == key
      self.root = nil
      self.size = self.size - 1
    else
      fail 'Not Key in Tree'
    end
  end

  private
  def _put(key, val, current_node)
    if key < current_node.key
      if current_node.has_left_child?
        _put(key, val, current_node.left_child)
      else
        current_node.left_child = TreeNode.new(key: key, val: val, parent: current_node)
      end
    else
      if current_node.has_right_child?
        _put(key, val, current_node.right_child)
      else
        current_node.right_child = TreeNode.new(key: key, val: val, parent: current_node)
      end
    end
  end

  def _get(key, current_node)
    if !current_node
      nil
    elsif current_node.key == key
      current_node
    elsif key < current_node.key
      _get(key, current_node.left_child)
    else
      _get(key, current_node.right_child)
    end
  end

  def _remove(current_node)
    if current_node.is_leaf?
      if current_node == current_node.parent.left_child
        current_node.parent.left_child = nil
      else
        current_node.parent.right_child = nil
      end
    elsif current_node.has_both_children?
      succ = current_node.find_successor
      succ.splice_out
      current_node.key = succ.key
      current_node.value = succ.value
    else
      if current_node.has_left_child?
        if current_node.is_left_child?
          current_node.left_child.parent = current_node.parent
          current_node.parent.left_child = current_node.left_child
        elsif current_node.is_right_child?
          current_node.left_child.parent = current_node.parent
          current_node.parent.right_child = current_node.left_child
        else
          current_node.replace_node_data(key: current_node.left_child.key,
                                         val: current_node.left_child.value,
                                         lc: current_node.left_child.left_child,
                                         rc: current_node.left_child.right_child
            )
        end
      else
        if current_node.is_left_child?
          current_node.right_child.parent = current_node.parent
          current_node.parent.left_child = current_node.right_child
        elsif current_node.is_right_child?
          current_node.right_child.parent = current_node.parent
          current_node.parent.right_child = current_node.right_child
        else
          current_node.replace_node_data(key: current_node.right_child.key,
                                         val: current_node.right_child.value,
                                         lc: current_node.right_child.left_child,
                                         rc: current_node.right_child.right_child
            )
        end
      end
    end
  end
end
