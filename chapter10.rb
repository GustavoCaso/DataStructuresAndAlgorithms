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
