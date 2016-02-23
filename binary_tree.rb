require_relative './stack'

# tree = BinaryTree.new('hello') do |t|
#   t.insert_left('world')
#   t.left_child.insert_left('foo')
#   t.insert_right('foo')
# end
class BinaryTree
  attr_accessor :root, :left_child, :right_child
  def initialize(root_value, &block)
    @root = root_value
    @left_child = nil
    @right_child = nil
    if block_given?
      instance_eval(&block)
    end
  end

  alias_method :set_root_value, :root=
  alias_method :get_root_value, :root

  def insert_left(value)
    new_node = self.class.new(value)
    if left_child
      left_child.left_child = new_node
    else
      self.left_child = new_node
    end
  end

  def insert_right(value)
    new_node = self.class.new(value)
    if right_child
      right_child.right_child = new_node
    else
      self.right_child = new_node
    end
  end

  def display_tree
    left_child_display = left_child ? left_child.display_tree : []
    right_child_display = right_child ? right_child.display_tree : []
    [root, left_child_display, right_child_display]
  end
end

# Displaying functions
def preorder(tree)
  if tree
    puts tree.get_root_value
    preorder(tree.left_child)
    preorder(tree.right_child)
  end
end

def postorder(tree)
  if tree
    preorder(tree.left_child)
    preorder(tree.right_child)
    puts tree.get_root_value
  end
end

def inorder(tree)
  if tree
    preorder(tree.left_child)
    puts tree.get_root_value
    preorder(tree.right_child)
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

# Function to evaluate parsed trees

def evaluate(parsed_tree)
  left_child = parsed_tree.left_child
  right_child = parsed_tree.right_child

  if left_child && right_child
    return evaluate(left_child).send(parsed_tree.get_root_value, evaluate(right_child))
  else
    return parsed_tree.get_root_value
  end
end

pt = build_parse_tree("( ( 10 + 5 ) * 3 )")
puts evaluate(pt)


