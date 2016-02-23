class BinaryHeap
  attr_accessor :heap_list, :current_size

  def initialize
    @heap_list = [0]
    @current_size = 0
  end

  def insert(value)
    heap_list.push(value)
    current_size += 1
    percolate_up(current_size)
  end

  def del_min
    ret_val = heap_list[1]
    heap_list[1] = heap_list[current_size]
    current_size -= 1
    heap_list.pop
    percolate_down(1)
    ret_val
  end

  def self.build_from_array(arr)
    i = arr.size / 2
    bh = new
    bh.current_size = arr.size
    bh.heap_list.push(arr)
    bh.heap_list.flatten!
    while(i > 0)
      bh.send(:percolate_down, i)
      i = i - 1
    end
    bh
  end

  private

  def percolate_up(i)
    while i / 2 > 0
      division = i/2
      if heap_list[i] < heap_list[division]
        tmp = heap_list[division]
        heap_list[division] = heap_list[i]
        heap_list[i] = tmp
      end
      i = division
    end
  end

  def percolate_down(i)
    while (left_element_position(i)) <= current_size
      mc = min_child(i)
      if heap_list[i] > heap_list[mc]
        tmp = heap_list[i]
        heap_list[i] = heap_list[mc]
        heap_list[mc] = tmp
      end
      i = mc
    end

  end

  def min_child(i)
    if (right_elemnt_position(i)) > current_size
      left_element_position(i)
    else
      if heap_list[left_element_position(i)] < heap_list[right_elemnt_position(i)]
        left_element_position(i)
      else
        right_elemnt_position(i)
      end
    end
  end

  def right_elemnt_position(i)
    ((i*2)+1)
  end

  def left_element_position(i)
    i*2
  end
end
