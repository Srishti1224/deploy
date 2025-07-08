export const concept_graph = [
  {
    id: "basic_programming",
    name: "Basic Programming",
    prerequisites: []
  },
  {
    id: "variables",
    name: "Variables",
    prerequisites: [
      "basic_programming"
    ]
  },
  {
    id: "conditionals",
    name: "Conditionals",
    "prerequisites": [
      "variables"
    ]
  },
  {
    id: "loops",
    name: "Loops",
    prerequisites: [
      "conditionals"
    ]
  },
  {
    id: "arrays",
    name: "Arrays",
    prerequisites: [
      "variables",
      "loops"
    ]
  },
  {
    id: "memory_layout",
    name: "Memory Layout",
    prerequisites: ["arrays"]
  },
//   {
//     "_id": "insert",
//     "name": "Insert",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "delete_in_array",
//     "name": "Delete in Array",
//     "prerequisites": ["arrays"]
//   },
  
//   {
//     "_id": "1d_arrays",
//     "name": "1D Arrays",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "2d_arrays",
//     "name": "2D Arrays",
//     "prerequisites": ["1d_arrays"]
//   },
//   {
//     "_id": "sliding_window",
//     "name": "Sliding Window",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "strings",
//     "name": "Strings",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "character_arrays",
//     "name": "Character Arrays",
//     "prerequisites": ["strings"]
//   },
//   {
//     "_id": "string_matching",
//     "name": "String Matching",
//     "prerequisites": ["strings"]
//   },
//   {
//     "_id": "kmp",
//     "name": "KMP",
//     "prerequisites": ["string_matching"]
//   },
//   {
//     "_id": "rabin_karp",
//     "name": "Rabin-Karp",
//     "prerequisites": ["string_matching"]
//   },
//   {
//     "_id": "z_algorithm",
//     "name": "Z-algorithm",
//     "prerequisites": ["string_matching"]
//   },
//   {
//     "_id": "linked_list",
//     "name": "Linked List",
//     "prerequisites": ["variables", "arrays"]
//   },
//   {
//     "_id": "singly_linked_list",
//     "name": "Singly Linked List",
//     "prerequisites": ["linked_list"]
//   },
//   {
//     "_id": "doubly_linked_list",
//     "name": "Doubly Linked List",
//     "prerequisites": ["singly_linked_list"]
//   },
//   {
//     "_id": "circular_linked_list",
//     "name": "Circular Linked List",
//     "prerequisites": ["singly_linked_list"]
//   },
//   {
//     "_id": "cycle_detection_linked_list",
//     "name": "Cycle Detection in Linked List",
//     "prerequisites": ["singly_linked_list"]
//   },
//   {
//     "_id": "stack",
//     "name": "Stack",
//     "prerequisites": ["arrays", "variables"]
//   },
//   {
//     "_id": "push",
//     "name": "Push",
//     "prerequisites": ["stack"]
//   },
//   {
//     "_id": "pop",
//     "name": "Pop",
//     "prerequisites": ["stack"]
//   },
//   {
//     "_id": "infix",
//     "name": "Infix",
//     "prerequisites": ["stack"]
//   },
//   {
//     "_id": "postfix",
//     "name": "Postfix",
//     "prerequisites": ["stack"]
//   },
//   {
//     "_id": "balanced_parentheses",
//     "name": "Balanced Parentheses",
//     "prerequisites": ["stack"]
//   },
  
//   {
//     "_id": "monotonic_stack",
//     "name": "Monotonic Stack",
//     "prerequisites": ["stack"]
//   },
//   {
//     "_id": "queue",
//     "name": "Queue",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "simple_queue",
//     "name": "Simple Queue",
//     "prerequisites": ["queue"]
//   },
//   {
//     "_id": "circular_queue",
//     "name": "Circular Queue",
//     "prerequisites": ["simple_queue"]
//   },
//   {
//     "_id": "deque",
//     "name": "Deque",
//     "prerequisites": ["queue"]
//   },
//   {
//     "_id": "hash_tables",
//     "name": "Hash Tables",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "hash_functions",
//     "name": "Hash Functions",
//     "prerequisites": ["hash_tables"]
//   },
//   {
//     "_id": "collision_resolution",
//     "name": "Collision Resolution",
//     "prerequisites": ["hash_tables"]
//   },
//   {
//     "_id": "hash_table_applications",
//     "name": "Applications of Hash Tables",
//     "prerequisites": ["hash_tables"]
//   },
//   {
//     "_id": "tree_terminology",
//     "name": "Tree Terminology",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "tree_traversals",
//     "name": "Tree Traversals",
//     "prerequisites": ["recursion_basics", "tree_terminology"]
//   },
//   {
//     "_id": "recursive_tree_operations",
//     "name": "Recursive Tree Operations",
//     "prerequisites": ["recursion_basics"]
//   },
//   {
//     "_id": "binary_tree",
//     "name": "Binary Tree",
//     "prerequisites": ["tree_terminology"]
//   },
//   {
//     "_id": "preorder",
//     "name": "Preorder",
//     "prerequisites": ["binary_tree"]
//   },
//   {
//     "_id": "inorder",
//     "name": "Inorder",
//     "prerequisites": ["binary_tree"]
//   },
//   {
//     "_id": "postorder",
//     "name": "Postorder",
//     "prerequisites": ["binary_tree"]
//   },
//   {
//     "_id": "tree_construction",
//     "name": "Tree Construction",
//     "prerequisites": ["tree_traversals"]
//   },
//   {
//     "_id": "level_order_traversal",
//     "name": "Level Order Traversal",
//     "prerequisites": ["binary_tree"]
//   },
//   {
//     "_id": "bst",
//     "name": "Binary Search Tree (BST)",
//     "prerequisites": ["binary_tree"]
//   },
//   {
//     "_id": "bst_insert",
//     "name": "BST Insert",
//     "prerequisites": ["bst"]
//   },
//   {
//     "_id": "bst_delete",
//     "name": "Delete",
//     "prerequisites": ["bst"]
//   },
//   {
//     "_id": "bst_search",
//     "name": "Search",
//     "prerequisites": ["bst"]
//   },
//   {
//     "_id": "bst_min",
//     "name": "BST Min",
//     "prerequisites": ["bst"]
//   },
//   {
//     "_id": "bst_max",
//     "name": "Max",
//     "prerequisites": ["bst"]
//   },
//   {
//     "_id": "balanced_bst",
//     "name": "Balanced BST",
//     "prerequisites": ["bst"]
//   },
//   {
//     "_id": "avl_tree",
//     "name": "AVL Tree",
//     "prerequisites": ["balanced_bst"]
//   },
//   {
//     "_id": "red_black_tree",
//     "name": "Red-Black Tree",
//     "prerequisites": ["balanced_bst"]
//   },
//   {
//     "_id": "tree_rotations",
//     "name": "Tree Rotations",
//     "prerequisites": ["avl_tree"]
//   },
//   {
//     "_id": "balancing_trees",
//     "name": "Balancing Trees",
//     "prerequisites": ["avl_tree", "red_black_tree"]
//   },
//   {
//     "_id": "heap",
//     "name": "Heap",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "min_heap",
//     "name": "Min",
//     "prerequisites": ["heap"]
//   },
//   {
//     "_id": "max_heap",
//     "name": "Max Heap",
//     "prerequisites": ["heap"]
//   },
//   {
//     "_id": "heapify",
//     "name": "Heapify",
//     "prerequisites": ["heap"]
//   },
//   {
//     "_id": "heap_sort",
//     "name": "Heap Sort",
//     "prerequisites": ["heapify"]
//   },
//   {
//     "_id": "priority_queue",
//     "name": "Priority Queue",
//     "prerequisites": ["heap"]
//   },
//   {
//     "_id": "graph_representations",
//     "name": "Graph Representations",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "graph_types",
//     "name": "Graph Types",
//     "prerequisites": ["graph_representations"]
//   },
//   {
//     "_id": "bfs",
//     "name": "BFS",
//     "prerequisites": ["graph_representations"]
//   },
//   {
//     "_id": "dfs",
//     "name": "DFS",
//     "prerequisites": ["graph_representations"]
//   },
//   {
//     "_id": "topological_sort",
//     "name": "Topological Sort",
//     "prerequisites": ["dfs"]
//   },
//   {
//     "_id": "connected_components",
//     "name": "Connected Components",
//     "prerequisites": ["bfs", "dfs"]
//   },
//   {
//     "_id": "dijkstra",
//     "name": "Dijkstra",
//     "prerequisites": ["graph_representations", "priority_queue"]
//   },
//   {
//     "_id": "bellman_ford",
//     "name": "Bellman-Ford",
//     "prerequisites": ["graph_representations", "conditionals"]
//   },
//   {
//     "_id": "floyd_warshall",
//     "name": "Floyd-Warshall",
//     "prerequisites": ["graph_representations", "2d_arrays"]
//   },
//   {
//     "_id": "kruskal",
//     "name": "MST (Kruskal)",
//     "prerequisites": ["graph_representations", "dsu", "heap"]
//   },
//   {
//     "_id": "prim",
//     "name": "Prim",
//     "prerequisites": ["graph_representations", "dsu", "heap"]
//   },
//   {
//     "_id": "trie",
//     "name": "Trie",
//     "prerequisites": ["sliding_window", "pointers"]
//   },
//   {
//     "_id": "trie_insert",
//     "name": "Trie Insert",
//     "prerequisites": ["trie"]
//   },
//   {
//     "_id": "trie_search",
//     "name": "Search",
//     "prerequisites": ["trie"]
//   },
//   {
//     "_id": "prefix_queries",
//     "name": "Prefix Queries",
//     "prerequisites": ["trie"]
//   },
//   {
//     "_id": "autocomplete",
//     "name": "Autocomplete",
//     "prerequisites": ["prefix_queries"]
//   },
//   {
//     "_id": "segment_tree",
//     "name": "Segment Tree",
//     "prerequisites": ["arrays", "functions"]
//   },
//   {
//     "_id": "range_queries",
//     "name": "Range Queries",
//     "prerequisites": ["segment_tree"]
//   },
//   {
//     "_id": "lazy_propagation",
//     "name": "Lazy Propagation",
//     "prerequisites": ["segment_tree"]
//   },
//   {
//     "_id": "fenwick_tree",
//     "name": "Fenwick Tree",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "prefix_sum_fenwick",
//     "name": "Prefix Sum (Fenwick)",
//     "prerequisites": ["fenwick_tree"]
//   },
//   {
//     "_id": "range_updates_fenwick",
//     "name": "Range Updates (Fenwick)",
//     "prerequisites": ["fenwick_tree"]
//   },
//   {
//     "_id": "dsu",
//     "name": "DSU",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "union_by_rank",
//     "name": "Union by Rank",
//     "prerequisites": ["dsu"]
//   },
//   {
//     "_id": "path_compression",
//     "name": "Path Compression",
//     "prerequisites": ["dsu"]
//   },
//   {
//     "_id": "cycle_detection",
//     "name": "Cycle Detection",
//     "prerequisites": ["dsu", "graph_representations"]
//   },
//   {
//     "_id": "bubble_sort",
//     "name": "Bubble Sort",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "selection_sort",
//     "name": "Selection Sort",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "merge_sort",
//     "name": "Merge Sort",
//     "prerequisites": ["functions"]
//   },
//   {
//     "_id": "quick_sort",
//     "name": "Quick Sort",
//     "prerequisites": ["functions"]
//   },
//   {
//     "_id": "counting_sort",
//     "name": "Counting Sort",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "radix_sort",
//     "name": "Radix Sort",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "binary_search",
//     "name": "Binary Search",
//     "prerequisites": ["1d_arrays"]
//   },
//   {
//     "_id": "binary_search_rotated",
//     "name": "Binary Search in Rotated Array",
//     "prerequisites": ["binary_search"]
//   },
//   {
//     "_id": "lower_bound",
//     "name": "Lower Bound",
//     "prerequisites": ["binary_search"]
//   },
//   [
//   {
//     "_id": "upper_bound",
//     "name": "Upper Bound",
//     "prerequisites": ["binary_search"]
//   },
//   {
//     "_id": "memoization",
//     "name": "Memoization",
//     "prerequisites": ["functions"]
//   },
//   {
//     "_id": "tabulation",
//     "name": "Tabulation",
//     "prerequisites": ["arrays"]
//   },
//   {
//     "_id": "knapsack_problem",
//     "name": "Knapsack Problem",
//     "prerequisites": ["tabulation"]
//   },
//   {
//     "_id": "lcs",
//     "name": "LCS",
//     "prerequisites": ["tabulation"]
//   },
//   {
//     "_id": "lis",
//     "name": "LIS",
//     "prerequisites": ["lcs", "arrays"]
//   },
//   {
//     "_id": "activity_selection",
//     "name": "Activity Selection",
//     "prerequisites": ["sorting"]
//   },
//   {
//     "_id": "interval_scheduling",
//     "name": "Interval Scheduling",
//     "prerequisites": ["sorting"]
//   },
//   {
//     "_id": "huffman_coding",
//     "name": "Huffman Coding",
//     "prerequisites": ["greedy", "heap"]
//   }
// ]




]