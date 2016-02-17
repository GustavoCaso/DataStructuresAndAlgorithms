class Stack
  def initialize
    @store = Array.new
  end

  def pop
    @store.pop
  end

  def push(element)
    @store.push(element)
    self
  end

  def size
    @store.size
  end
end

class BinaryTree
  attr_accessor :data, :left_child, :right_child
  def initialize(data)
    @data = data
    @left_child = nil
    @right_child = nil
  end

  def insert_left(data)
    if left_child
      new_node = self.class.new(data)
      new_node.left_child = left_child
      self.left_child = new_node
    else
      self.left_child = self.class.new(data)
    end
  end

  def insert_right(data)
    if right_child
      new_node = self.class.new(data)
      new_node.right_child = right_child
      self.right_child = new_node
    else
      self.right_child = self.class.new(data)
    end
  end

  alias_method :set_root_value, :data=
  alias_method :get_root_value, :data

  def display_tree
    left_child_display = left_child ? left_child.display_tree : []
    right_child_display = right_child ? right_child.display_tree : []
    [data, left_child_display, right_child_display]
  end
end

# Build a function to parse mathematical expressions

def build_parse_tree(exp)
  exp_arr = exp.split
  tree_stack = Stack.new
  tree = BinaryTree.new('')
  current_tree = tree
  exp_arr.each do |i|
    if i == '('
      current_tree.insert_left('')
      tree_stack.push(current_tree)
      current_tree = current_tree.left_child
    elsif i.match(/\d/)
      current_tree.set_root_value(Integer(i))
      parent = tree_stack.pop
      current_tree = parent
    elsif ['+', '-', '*', '/'].include?(i)
      current_tree.set_root_value(i)
      current_tree.insert_right('')
      tree_stack.push(current_tree)
      current_tree = current_tree.right_child
    elsif i == ')'
      current_tree = tree_stack.pop
    else
      fail 'Invalid Argument'
    end
  end
  tree
end
